# `dataAwsccSecuritylakeSubscriberNotification` Submodule <a name="`dataAwsccSecuritylakeSubscriberNotification` Submodule" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSecuritylakeSubscriberNotification <a name="DataAwsccSecuritylakeSubscriberNotification" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/securitylake_subscriber_notification awscc_securitylake_subscriber_notification}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecuritylakeSubscriberNotification(Construct Scope, string Id, DataAwsccSecuritylakeSubscriberNotificationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig">DataAwsccSecuritylakeSubscriberNotificationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig">DataAwsccSecuritylakeSubscriberNotificationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSecuritylakeSubscriberNotification resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSecuritylakeSubscriberNotification.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSecuritylakeSubscriberNotification.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSecuritylakeSubscriberNotification.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSecuritylakeSubscriberNotification.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccSecuritylakeSubscriberNotification resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSecuritylakeSubscriberNotification to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSecuritylakeSubscriberNotification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/securitylake_subscriber_notification#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSecuritylakeSubscriberNotification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.notificationConfiguration">NotificationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference">DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.subscriberArn">SubscriberArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.subscriberEndpoint">SubscriberEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `NotificationConfiguration`<sup>Required</sup> <a name="NotificationConfiguration" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.notificationConfiguration"></a>

```csharp
public DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference NotificationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference">DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference</a>

---

##### `SubscriberArn`<sup>Required</sup> <a name="SubscriberArn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.subscriberArn"></a>

```csharp
public string SubscriberArn { get; }
```

- *Type:* string

---

##### `SubscriberEndpoint`<sup>Required</sup> <a name="SubscriberEndpoint" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.subscriberEndpoint"></a>

```csharp
public string SubscriberEndpoint { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSecuritylakeSubscriberNotificationConfig <a name="DataAwsccSecuritylakeSubscriberNotificationConfig" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecuritylakeSubscriberNotificationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/securitylake_subscriber_notification#id DataAwsccSecuritylakeSubscriberNotification#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSecuritylakeSubscriberNotificationNotificationConfiguration <a name="DataAwsccSecuritylakeSubscriberNotificationNotificationConfiguration" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecuritylakeSubscriberNotificationNotificationConfiguration {

};
```


### DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration <a name="DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference <a name="DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyName">AuthorizationApiKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyValue">AuthorizationApiKeyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.httpMethod">HttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.targetRoleArn">TargetRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration">DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationApiKeyName`<sup>Required</sup> <a name="AuthorizationApiKeyName" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyName"></a>

```csharp
public string AuthorizationApiKeyName { get; }
```

- *Type:* string

---

##### `AuthorizationApiKeyValue`<sup>Required</sup> <a name="AuthorizationApiKeyValue" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyValue"></a>

```csharp
public string AuthorizationApiKeyValue { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.httpMethod"></a>

```csharp
public string HttpMethod { get; }
```

- *Type:* string

---

##### `TargetRoleArn`<sup>Required</sup> <a name="TargetRoleArn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.targetRoleArn"></a>

```csharp
public string TargetRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration">DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration</a>

---


### DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference <a name="DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.httpsNotificationConfiguration">HttpsNotificationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference">DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.sqsNotificationConfiguration">SqsNotificationConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfiguration">DataAwsccSecuritylakeSubscriberNotificationNotificationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpsNotificationConfiguration`<sup>Required</sup> <a name="HttpsNotificationConfiguration" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.httpsNotificationConfiguration"></a>

```csharp
public DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference HttpsNotificationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference">DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference</a>

---

##### `SqsNotificationConfiguration`<sup>Required</sup> <a name="SqsNotificationConfiguration" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.sqsNotificationConfiguration"></a>

```csharp
public string SqsNotificationConfiguration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecuritylakeSubscriberNotificationNotificationConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfiguration">DataAwsccSecuritylakeSubscriberNotificationNotificationConfiguration</a>

---



