# `dataAwsccLightsailAlarm` Submodule <a name="`dataAwsccLightsailAlarm` Submodule" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLightsailAlarm <a name="DataAwsccLightsailAlarm" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lightsail_alarm awscc_lightsail_alarm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailalarm"

dataawscclightsailalarm.NewDataAwsccLightsailAlarm(scope Construct, id *string, config DataAwsccLightsailAlarmConfig) DataAwsccLightsailAlarm
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarmConfig">DataAwsccLightsailAlarmConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarmConfig">DataAwsccLightsailAlarmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLightsailAlarm resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailalarm"

dataawscclightsailalarm.DataAwsccLightsailAlarm_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailalarm"

dataawscclightsailalarm.DataAwsccLightsailAlarm_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailalarm"

dataawscclightsailalarm.DataAwsccLightsailAlarm_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailalarm"

dataawscclightsailalarm.DataAwsccLightsailAlarm_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccLightsailAlarm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccLightsailAlarm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccLightsailAlarm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lightsail_alarm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLightsailAlarm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.alarmArn">AlarmArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.alarmName">AlarmName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.comparisonOperator">ComparisonOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.contactProtocols">ContactProtocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.datapointsToAlarm">DatapointsToAlarm</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.monitoredResourceName">MonitoredResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.notificationEnabled">NotificationEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.notificationTriggers">NotificationTriggers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.treatMissingData">TreatMissingData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AlarmArn`<sup>Required</sup> <a name="AlarmArn" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.alarmArn"></a>

```go
func AlarmArn() *string
```

- *Type:* *string

---

##### `AlarmName`<sup>Required</sup> <a name="AlarmName" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.alarmName"></a>

```go
func AlarmName() *string
```

- *Type:* *string

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.comparisonOperator"></a>

```go
func ComparisonOperator() *string
```

- *Type:* *string

---

##### `ContactProtocols`<sup>Required</sup> <a name="ContactProtocols" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.contactProtocols"></a>

```go
func ContactProtocols() *[]*string
```

- *Type:* *[]*string

---

##### `DatapointsToAlarm`<sup>Required</sup> <a name="DatapointsToAlarm" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.datapointsToAlarm"></a>

```go
func DatapointsToAlarm() *f64
```

- *Type:* *f64

---

##### `EvaluationPeriods`<sup>Required</sup> <a name="EvaluationPeriods" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.evaluationPeriods"></a>

```go
func EvaluationPeriods() *f64
```

- *Type:* *f64

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `MonitoredResourceName`<sup>Required</sup> <a name="MonitoredResourceName" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.monitoredResourceName"></a>

```go
func MonitoredResourceName() *string
```

- *Type:* *string

---

##### `NotificationEnabled`<sup>Required</sup> <a name="NotificationEnabled" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.notificationEnabled"></a>

```go
func NotificationEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `NotificationTriggers`<sup>Required</sup> <a name="NotificationTriggers" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.notificationTriggers"></a>

```go
func NotificationTriggers() *[]*string
```

- *Type:* *[]*string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `TreatMissingData`<sup>Required</sup> <a name="TreatMissingData" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.treatMissingData"></a>

```go
func TreatMissingData() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarm.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLightsailAlarmConfig <a name="DataAwsccLightsailAlarmConfig" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarmConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailalarm"

&dataawscclightsailalarm.DataAwsccLightsailAlarmConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarmConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarmConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarmConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarmConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarmConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarmConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarmConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarmConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarmConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarmConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarmConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarmConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarmConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarmConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarmConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLightsailAlarm.DataAwsccLightsailAlarmConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lightsail_alarm#id DataAwsccLightsailAlarm#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



