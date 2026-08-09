# `dataAwsccEventsEndpoint` Submodule <a name="`dataAwsccEventsEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEventsEndpoint <a name="DataAwsccEventsEndpoint" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/events_endpoint awscc_events_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsEndpoint(Construct Scope, string Id, DataAwsccEventsEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig">DataAwsccEventsEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig">DataAwsccEventsEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEventsEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEventsEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEventsEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEventsEndpoint.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEventsEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccEventsEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEventsEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEventsEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/events_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEventsEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.endpointId">EndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.endpointUrl">EndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.eventBuses">EventBuses</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList">DataAwsccEventsEndpointEventBusesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.replicationConfig">ReplicationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference">DataAwsccEventsEndpointReplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.routingConfig">RoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference">DataAwsccEventsEndpointRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.stateReason">StateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.endpointId"></a>

```csharp
public string EndpointId { get; }
```

- *Type:* string

---

##### `EndpointUrl`<sup>Required</sup> <a name="EndpointUrl" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.endpointUrl"></a>

```csharp
public string EndpointUrl { get; }
```

- *Type:* string

---

##### `EventBuses`<sup>Required</sup> <a name="EventBuses" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.eventBuses"></a>

```csharp
public DataAwsccEventsEndpointEventBusesList EventBuses { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList">DataAwsccEventsEndpointEventBusesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReplicationConfig`<sup>Required</sup> <a name="ReplicationConfig" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.replicationConfig"></a>

```csharp
public DataAwsccEventsEndpointReplicationConfigOutputReference ReplicationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference">DataAwsccEventsEndpointReplicationConfigOutputReference</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `RoutingConfig`<sup>Required</sup> <a name="RoutingConfig" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.routingConfig"></a>

```csharp
public DataAwsccEventsEndpointRoutingConfigOutputReference RoutingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference">DataAwsccEventsEndpointRoutingConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateReason`<sup>Required</sup> <a name="StateReason" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.stateReason"></a>

```csharp
public string StateReason { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEventsEndpointConfig <a name="DataAwsccEventsEndpointConfig" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsEndpointConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/events_endpoint#id DataAwsccEventsEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEventsEndpointEventBuses <a name="DataAwsccEventsEndpointEventBuses" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBuses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBuses.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsEndpointEventBuses {

};
```


### DataAwsccEventsEndpointReplicationConfig <a name="DataAwsccEventsEndpointReplicationConfig" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsEndpointReplicationConfig {

};
```


### DataAwsccEventsEndpointRoutingConfig <a name="DataAwsccEventsEndpointRoutingConfig" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsEndpointRoutingConfig {

};
```


### DataAwsccEventsEndpointRoutingConfigFailoverConfig <a name="DataAwsccEventsEndpointRoutingConfigFailoverConfig" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsEndpointRoutingConfigFailoverConfig {

};
```


### DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimary <a name="DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimary" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimary {

};
```


### DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondary <a name="DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondary" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondary {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEventsEndpointEventBusesList <a name="DataAwsccEventsEndpointEventBusesList" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsEndpointEventBusesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.get"></a>

```csharp
private DataAwsccEventsEndpointEventBusesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEventsEndpointEventBusesOutputReference <a name="DataAwsccEventsEndpointEventBusesOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsEndpointEventBusesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.property.eventBusArn">EventBusArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBuses">DataAwsccEventsEndpointEventBuses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventBusArn`<sup>Required</sup> <a name="EventBusArn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.property.eventBusArn"></a>

```csharp
public string EventBusArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsEndpointEventBuses InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBuses">DataAwsccEventsEndpointEventBuses</a>

---


### DataAwsccEventsEndpointReplicationConfigOutputReference <a name="DataAwsccEventsEndpointReplicationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsEndpointReplicationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfig">DataAwsccEventsEndpointReplicationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsEndpointReplicationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfig">DataAwsccEventsEndpointReplicationConfig</a>

---


### DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference <a name="DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.property.primary">Primary</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference">DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.property.secondary">Secondary</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference">DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfig">DataAwsccEventsEndpointRoutingConfigFailoverConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.property.primary"></a>

```csharp
public DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference Primary { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference">DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference</a>

---

##### `Secondary`<sup>Required</sup> <a name="Secondary" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.property.secondary"></a>

```csharp
public DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference Secondary { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference">DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsEndpointRoutingConfigFailoverConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfig">DataAwsccEventsEndpointRoutingConfigFailoverConfig</a>

---


### DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference <a name="DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.healthCheck">HealthCheck</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimary">DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.healthCheck"></a>

```csharp
public string HealthCheck { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimary InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimary">DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimary</a>

---


### DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference <a name="DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.route">Route</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondary">DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Route`<sup>Required</sup> <a name="Route" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.route"></a>

```csharp
public string Route { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondary InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondary">DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondary</a>

---


### DataAwsccEventsEndpointRoutingConfigOutputReference <a name="DataAwsccEventsEndpointRoutingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsEndpointRoutingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.property.failoverConfig">FailoverConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference">DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfig">DataAwsccEventsEndpointRoutingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailoverConfig`<sup>Required</sup> <a name="FailoverConfig" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.property.failoverConfig"></a>

```csharp
public DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference FailoverConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference">DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsEndpointRoutingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfig">DataAwsccEventsEndpointRoutingConfig</a>

---



