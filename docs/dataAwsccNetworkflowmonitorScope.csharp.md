# `dataAwsccNetworkflowmonitorScope` Submodule <a name="`dataAwsccNetworkflowmonitorScope` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworkflowmonitorScope <a name="DataAwsccNetworkflowmonitorScope" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/networkflowmonitor_scope awscc_networkflowmonitor_scope}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkflowmonitorScope(Construct Scope, string Id, DataAwsccNetworkflowmonitorScopeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig">DataAwsccNetworkflowmonitorScopeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig">DataAwsccNetworkflowmonitorScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNetworkflowmonitorScope resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccNetworkflowmonitorScope.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccNetworkflowmonitorScope.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccNetworkflowmonitorScope.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccNetworkflowmonitorScope.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccNetworkflowmonitorScope resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccNetworkflowmonitorScope to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccNetworkflowmonitorScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/networkflowmonitor_scope#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworkflowmonitorScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.scopeArn">ScopeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.scopeId">ScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList">DataAwsccNetworkflowmonitorScopeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList">DataAwsccNetworkflowmonitorScopeTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ScopeArn`<sup>Required</sup> <a name="ScopeArn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.scopeArn"></a>

```csharp
public string ScopeArn { get; }
```

- *Type:* string

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.scopeId"></a>

```csharp
public string ScopeId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.tags"></a>

```csharp
public DataAwsccNetworkflowmonitorScopeTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList">DataAwsccNetworkflowmonitorScopeTagsList</a>

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.targets"></a>

```csharp
public DataAwsccNetworkflowmonitorScopeTargetsList Targets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList">DataAwsccNetworkflowmonitorScopeTargetsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworkflowmonitorScopeConfig <a name="DataAwsccNetworkflowmonitorScopeConfig" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkflowmonitorScopeConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/networkflowmonitor_scope#id DataAwsccNetworkflowmonitorScope#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworkflowmonitorScopeTags <a name="DataAwsccNetworkflowmonitorScopeTags" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkflowmonitorScopeTags {

};
```


### DataAwsccNetworkflowmonitorScopeTargets <a name="DataAwsccNetworkflowmonitorScopeTargets" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkflowmonitorScopeTargets {

};
```


### DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifier <a name="DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifier" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifier.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifier {

};
```


### DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetId <a name="DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetId" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetId.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetId {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworkflowmonitorScopeTagsList <a name="DataAwsccNetworkflowmonitorScopeTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkflowmonitorScopeTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.get"></a>

```csharp
private DataAwsccNetworkflowmonitorScopeTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccNetworkflowmonitorScopeTagsOutputReference <a name="DataAwsccNetworkflowmonitorScopeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkflowmonitorScopeTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTags">DataAwsccNetworkflowmonitorScopeTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccNetworkflowmonitorScopeTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTags">DataAwsccNetworkflowmonitorScopeTags</a>

---


### DataAwsccNetworkflowmonitorScopeTargetsList <a name="DataAwsccNetworkflowmonitorScopeTargetsList" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkflowmonitorScopeTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.get"></a>

```csharp
private DataAwsccNetworkflowmonitorScopeTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccNetworkflowmonitorScopeTargetsOutputReference <a name="DataAwsccNetworkflowmonitorScopeTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkflowmonitorScopeTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.property.targetIdentifier">TargetIdentifier</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference">DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargets">DataAwsccNetworkflowmonitorScopeTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TargetIdentifier`<sup>Required</sup> <a name="TargetIdentifier" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.property.targetIdentifier"></a>

```csharp
public DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference TargetIdentifier { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference">DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccNetworkflowmonitorScopeTargets InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargets">DataAwsccNetworkflowmonitorScopeTargets</a>

---


### DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference <a name="DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.targetId">TargetId</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference">DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.targetType">TargetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifier">DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.targetId"></a>

```csharp
public DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference TargetId { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference">DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference</a>

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.targetType"></a>

```csharp
public string TargetType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.internalValue"></a>

```csharp
public DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifier InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifier">DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifier</a>

---


### DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference <a name="DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetId">DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.internalValue"></a>

```csharp
public DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetId InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetId">DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetId</a>

---



