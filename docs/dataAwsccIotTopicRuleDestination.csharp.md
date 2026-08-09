# `dataAwsccIotTopicRuleDestination` Submodule <a name="`dataAwsccIotTopicRuleDestination` Submodule" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotTopicRuleDestination <a name="DataAwsccIotTopicRuleDestination" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iot_topic_rule_destination awscc_iot_topic_rule_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotTopicRuleDestination(Construct Scope, string Id, DataAwsccIotTopicRuleDestinationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig">DataAwsccIotTopicRuleDestinationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig">DataAwsccIotTopicRuleDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotTopicRuleDestination resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotTopicRuleDestination.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotTopicRuleDestination.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotTopicRuleDestination.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotTopicRuleDestination.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccIotTopicRuleDestination resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIotTopicRuleDestination to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIotTopicRuleDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iot_topic_rule_destination#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotTopicRuleDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.httpUrlProperties">HttpUrlProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference">DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.statusReason">StatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.vpcProperties">VpcProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference">DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `HttpUrlProperties`<sup>Required</sup> <a name="HttpUrlProperties" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.httpUrlProperties"></a>

```csharp
public DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference HttpUrlProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference">DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.statusReason"></a>

```csharp
public string StatusReason { get; }
```

- *Type:* string

---

##### `VpcProperties`<sup>Required</sup> <a name="VpcProperties" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.vpcProperties"></a>

```csharp
public DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference VpcProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference">DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotTopicRuleDestinationConfig <a name="DataAwsccIotTopicRuleDestinationConfig" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotTopicRuleDestinationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iot_topic_rule_destination#id DataAwsccIotTopicRuleDestination#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotTopicRuleDestinationHttpUrlProperties <a name="DataAwsccIotTopicRuleDestinationHttpUrlProperties" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotTopicRuleDestinationHttpUrlProperties {

};
```


### DataAwsccIotTopicRuleDestinationVpcProperties <a name="DataAwsccIotTopicRuleDestinationVpcProperties" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotTopicRuleDestinationVpcProperties {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference <a name="DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.confirmationUrl">ConfirmationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlProperties">DataAwsccIotTopicRuleDestinationHttpUrlProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfirmationUrl`<sup>Required</sup> <a name="ConfirmationUrl" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.confirmationUrl"></a>

```csharp
public string ConfirmationUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotTopicRuleDestinationHttpUrlProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlProperties">DataAwsccIotTopicRuleDestinationHttpUrlProperties</a>

---


### DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference <a name="DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcProperties">DataAwsccIotTopicRuleDestinationVpcProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotTopicRuleDestinationVpcProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcProperties">DataAwsccIotTopicRuleDestinationVpcProperties</a>

---



